# Generated by Django 3.2.16 on 2023-01-09 22:49

import apps.blog.models
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0001_initial'),
        ('blog', '0008_post_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='category.category'),
        ),
        migrations.AlterField(
            model_name='post',
            name='slug',
            field=models.SlugField(default=uuid.uuid4, max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='thumbnail',
            field=models.ImageField(blank=True, null=True, upload_to=apps.blog.models.blog_thumbnail_directory),
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
