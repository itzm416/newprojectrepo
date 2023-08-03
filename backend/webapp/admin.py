from django.contrib import admin
from webapp.models import Events

class EventAdmin(admin.ModelAdmin):
    list_display = ('event_name','time')

admin.site.register(Events, EventAdmin)
