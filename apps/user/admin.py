from django.contrib import admin
from .models import *

@admin.register(UserAccount)
class UserAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'is_staff', 'is_editor')
    search_field = ('first_name', 'last_name', 'email', 'is_staff', 'is_editor',)
