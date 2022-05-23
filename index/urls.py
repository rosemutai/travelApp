from django.urls import path
from .views import RegisterUserView, LogoutApiView

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
 

urlpatterns = [
    path('signup/', RegisterUserView.as_view(), name='signup'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', LogoutApiView.as_view(), name='auth_logout'),
    #path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]