package routes

import (
	"nova-stream/internal/handler"

	"github.com/gofiber/fiber/v3"
)

func Setup(app *fiber.App){
	app.Post("api/v1/images/:from/convert/:to", handler.ConvertImage)
}
