from django.db import models
from django.contrib.auth.models import AbstractUser
from account.manager import MyUserManager

class MyUser(AbstractUser):
    username = None
    email = models.EmailField(verbose_name='Email Address', unique=True)
    
    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email




