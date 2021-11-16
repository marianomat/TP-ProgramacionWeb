from django.urls import path, include
from rest_framework import routers

from api.views import TurnoViewSet, me
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api.views import RegisterView
from api.views import PagoViewSet

router = routers.DefaultRouter()
router.register("turnos", TurnoViewSet)
router.register("pagos", PagoViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view()),
    path('me/', me)
]
