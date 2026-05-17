from fastapi import HTTPException, status

def raise_404(detail: str = "Not found"):
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=detail)

def raise_401(detail: str = "Could not validate credentials"):
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail=detail,
        headers={"WWW-Authenticate": "Bearer"},
    )

def raise_403(detail: str = "Not authorized"):
    raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=detail)

def raise_400(detail: str = "Bad request"):
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=detail)

def raise_409(detail: str = "Resource already exists or is in use"):
    raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail=detail)