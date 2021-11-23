from rest_framework.viewsets import ViewSet
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status


class HomeViewSet(ViewSet):
    def get(self, req: Request) -> Response:
        return Response(data="Hello World!", status=status.HTTP_200_OK)
