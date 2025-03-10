from django.db import models

# Create your models here.


class Meme(models.Model):
    name = models.CharField(max_length=100)
    caption = models.CharField(max_length=100)
    url = models.URLField(max_length=200)
    date = models.DateTimeField(auto_now_add=True)

    #Added a meta class, to order the table as last created first
    class Meta:
        ordering = ['-date']
        # unique_together = ('caption', 'url', 'name')

    def __str__(self):
        return self.name
