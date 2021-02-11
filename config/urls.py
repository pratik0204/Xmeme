from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.contrib import admin
from django.urls import path, include


schema_view = get_schema_view(
    openapi.Info(
        title="XMEME API",
        default_version='v1',
        description="CRUD API's for meme.",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@memes.remote"),
        license=openapi.License(name="TEST License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('swagger-ui/', schema_view.with_ui('swagger', cache_timeout=0),
         name='schema-swagger-ui'),
    path('admin/', admin.site.urls),
    path('', include('xmeme.urls')),
    path('redoc', schema_view.with_ui(
        'redoc', cache_timeout=0), name='schema-redoc'),
]
