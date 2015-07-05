from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'', include('packets.urls')),

    #admin site
    url(r'^admin/', include(admin.site.urls)),

    #angular frontend
    url(r'^analysis/*', TemplateView.as_view(template_name='index.html')),
]

format_suffix_patterns(urlpatterns)
