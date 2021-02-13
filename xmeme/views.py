from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .models import Meme
from .serializers import MemeSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin

# Create your views here.


"""
MemeAPIView-

1.This class provides a serialized paginated 
output at the api endpoint, which contains 
all the memes in the table from start to end with 

2. It is Generic class-based View, used with different model mixins.

"""
class MemeAPIView(GenericAPIView, ListModelMixin, CreateModelMixin):
    # takes serializer class
    serializer_class = MemeSerializer

    #and the queryset
    queryset = Meme.objects.all()

    def get(self, request):
        return self.list(request)


"""
MemeAPIView100-

1.This class provides a serialized paginated 
output at the api endpoint, which only the first
100 memes in the table.

2. It is simple API class-based View.

"""
class MemeAPIView100(APIView):

    #GET request method which fetches only 100 memes
    def get(self, request):
        memes = Meme.objects.all()
        sliced = memes[0:min(len(memes), 100)]
        serializer = MemeSerializer(sliced, many=True)
        return Response(serializer.data)

    #post method
    def post(self, request):

        #code to check whether same row is there in the table or not
        meme_count = Meme.objects.filter(**request.data).count()
        if meme_count > 0:
            return Response(
                {"detail": "Meme already present by same author."},
                status.HTTP_409_CONFLICT
            )

        serializer = MemeSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


"""
MemeAPIView100-

1.This class provides a serialized paginated 
output at the api endpoint, which only the first
100 memes in the table.

2. It is simple API class-based View.

"""
class MemeDetail(APIView):

    #function to check whether there is a row with the provided id or not
    def get_object(self, id):
        return get_object_or_404(Meme, id=id)

    #get method to fetch the id details
    def get(self, request, id):
        meme = self.get_object(id)
        serializer = MemeSerializer(meme)
        return Response(serializer.data)

    #patch update , and partial update allowed
    def patch(self, request, id):
        meme = self.get_object(id)
        serializer = MemeSerializer(meme, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    #additional delete field added, in case if I want to add authentication here.
    def delete(self, request, id):
        meme = meme = self.get_object(id)
        meme.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
