from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from account.models import MyUser

class UserAdmin(BaseUserAdmin):

    list_display = ('id','email')

    list_filter = ('email',)

    fieldsets = (
        ('User Credentials', {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2')}
        ),
    )

    search_fields = ('email',)
    ordering = ('email',)


admin.site.register(MyUser, UserAdmin)
