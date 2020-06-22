from django.conf.urls import url

from django.urls import path,include
from . import views

urlpatterns =[
    path('',views.home,name='home'),
    path('boards/<pk>/',views.board_topics,name='board_topics'),
    path('boards/<pk>/new/',views.new_topic,name='new_topic')
]