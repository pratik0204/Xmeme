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

# Create your views here.


class MemeAPIView(APIView):

    def get(self, request):
        memes = Meme.objects.all()
        serializer = MemeSerializer(memes, many=True)
        return Response(serializer.data)

    def post(self, request):

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


class MemeDetail(APIView):

    def get_object(self, id):
        return get_object_or_404(Meme, id=id)

    def get(self, request, id):
        meme = self.get_object(id)
        serializer = MemeSerializer(meme)
        return Response(serializer.data)

    def patch(self, request, id):
        meme = self.get_object(id)
        serializer = MemeSerializer(meme, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
