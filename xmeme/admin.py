from django.contrib import admin
from .models import Meme

# Register your models here.


class MemeAdmin(admin.ModelAdmin):
    readonly_fields = ('date',)


admin.site.register(Meme, MemeAdmin)
