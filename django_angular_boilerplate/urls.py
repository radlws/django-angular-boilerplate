from django.conf.urls import patterns, url

from django_angular_boilerplate.views import IndexView

urlpatterns = patterns(
    '',

    url('^.*$', IndexView.as_view(), name='index'),
)
