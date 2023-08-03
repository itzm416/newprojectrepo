from django.db import models
from django.utils.text import slugify
from account.models import MyUser

LOCATION_CHOICES = (
   ("Select","Select"),
   ("Andaman and Nicobar Islands","Andaman and Nicobar Islands"),
   ("Andhra Pradesh","Andhra Pradesh"),
   ("Arunachal Pradesh","Arunachal Pradesh"),
   ("Assam","Assam"),
   ("Bihar","Bihar"),
   ("Chhattisgarh","Chhattisgarh"),
   ("Chandigarh","Chandigarh"),
   ("Dadra and Nagar Haveli","Dadra and Nagar Haveli"),
   ("Daman and Diu","Daman and Diu"),
   ("Delhi","Delhi"),
   ("Goa","Goa"),
   ("Gujarat","Gujarat"),
   ("Haryana","Haryana"),
   ("Himachal Pradesh","Himachal Pradesh"),
   ("Jammu and Kashmir","Jammu and Kashmir"),
   ("Jharkhand","Jharkhand"),
   ("Karnataka","Karnataka"),
   ("Kerala","Kerala"),
   ("Ladakh","Ladakh"),
   ("Lakshadweep","Lakshadweep"),
   ("Madhya Pradesh","Madhya Pradesh"),
   ("Maharashtra","Maharashtra"),
   ("Manipur","Manipur"),
   ("Meghalaya","Meghalaya"),
   ("Mizoram","Mizoram"),
   ("Nagaland","Nagaland"),
   ("Odisha","Odisha"),
   ("Punjab","Punjab"),
   ("Pondicherry","Pondicherry"),
   ("Rajasthan","Rajasthan"),
   ("Sikkim","Sikkim"),
   ("Tamil Nadu","Tamil Nadu"),
   ("Telangana","Telangana"),
   ("Tripura","Tripura"),
   ("Uttar Pradesh","Uttar Pradesh"),
   ("Uttarakhand","Uttarakhand"),
   ("West Bengal","West Bengal")
)

# Create your models here.
class Events(models.Model):
    creator = models.ForeignKey(MyUser,on_delete=models.CASCADE)
    event_name = models.CharField(max_length=225, null=False, blank=False)
    data = models.TextField(null=True, blank=True)
    time = models.DateTimeField(auto_now_add=True)
    location = models.CharField(choices=LOCATION_CHOICES, max_length=50)
    image = models.ImageField(upload_to='images')
    is_liked = models.ManyToManyField(MyUser, blank=True, null=True, related_name='like')
    userid = models.CharField(max_length=100, null=True, blank=True)
    
    slug = models.SlugField(max_length=200, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.event_name)
        super(Events, self).save(*args, **kwargs)

    def __str__(self):
        return self.event_name
