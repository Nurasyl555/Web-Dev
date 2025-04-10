from django.shortcuts import render, HttpResponse, get_list_or_404
from .models import Company, Vacancy
from django.http import JsonResponse, HttpResponse
from rest_framework import generics
from django.views import View
from .serializers import CompanySerializer, VacancySerializer
# Create your views here.
def home(request):
    return HttpResponse("Hello Muha")

class CompanyListView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
class CompanyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
class VacancyListView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
class VacancyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
class VacancyCategoryView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['pk']
        return Vacancy.objects.filter(company_id=company_id)

class TopTenVacancyView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]