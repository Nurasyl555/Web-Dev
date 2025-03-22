from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    data = {
        'title': 'Main page - 1',
        'values': ['dss', 'sdf', "sdf"],
        'obj': {
            'car': 'bmw',
            'age': '18',
            'gender': 'male'
        }
    }
    return render(request, 'main/index.html', data)

def about(request):
    return render(request, 'main/about.html')