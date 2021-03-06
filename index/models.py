from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    profile_pic = models.ImageField()
    followers = models.IntegerField(default=0)
    following = models.IntegerField(default=0)
    birth_date = models.DateField(null=True, blank=True)
    post = models.ImageField()


    def __str__(self):
        return self.user.email

    def add_follower(self, request):
        new_follower = self.followers + 1
        new_follower.save()

    def following(self, request):
        new_follow = self.following + 1
        new_follow.save()

@receiver(post_save, sender=User)
def update_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    instance.profile.save()
