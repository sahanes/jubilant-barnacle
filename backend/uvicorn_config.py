<<<<<<< HEAD
from uvicorn.workers import UvicornWorker


class CustomWorker(UvicornWorker):
    CONFIG_KWARGS = {
        "loop": "auto",
        "http": "auto",
        "ws": "auto",
        "lifespan": "auto",
        "log_level": "info",
        "access_log": True,
        "use_colors": True,
        "reload": True
    }
=======
from uvicorn.workers import UvicornWorker


class CustomWorker(UvicornWorker):
    CONFIG_KWARGS = {
        "loop": "auto",
        "http": "auto",
        "ws": "auto",
        "lifespan": "auto",
        "log_level": "info",
        "access_log": True,
        "use_colors": True,
        "reload": True
    }
>>>>>>> 467f9179b7ec187f353f256c52c2ae9e8be701b2
