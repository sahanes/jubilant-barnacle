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
