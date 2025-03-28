from django.contrib import admin
from django.urls import path, include

from .views import home, CategoryListView, CategoryDeteailView, CategoryProductView
from  .views import ProductListView, ProductDeteailView

urlpatterns = [
    path('', home, name='home'),
    path('category/', CategoryListView.as_view(), name='category-list'),
    path('category/<int:id>/', CategoryDeteailView.as_view(), name='category-detail'),
    path('product/', ProductListView.as_view(), name='product-list'),
    path('product/<int:id>', ProductDeteailView.as_view(), name='product-detail'),
    path('category/<int:id>/product/', CategoryProductView.as_view(), name='category-product'),
]
