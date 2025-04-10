
from django.contrib import admin
from django.urls import path
from .views import CompanyListView, CompanyDetailView, VacancyCategoryView, VacancyDetailView, VacancyListView, TopTenVacancyView
from .views import home
urlpatterns = [
    path('company/', CompanyListView.as_view(), name="company-list"),
    path('company/<int:pk>', CompanyDetailView.as_view(), name='company-detail'),
    path('companies/<int:pk>/vacancies/', VacancyCategoryView.as_view(), name='company-by-vacancy'),
    path('vacancies/', VacancyListView.as_view(), name="vacancy-list"),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view(), name="vacancy-detail"),
    path('vacancies/top_ten/', TopTenVacancyView.as_view(), name='top-ten-vacancies'),
    path('', home, name="home")


]