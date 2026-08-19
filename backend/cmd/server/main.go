package main

import (
	"log"
	"nova-stream/internal/config"
	"nova-stream/internal/middleware"
	"nova-stream/internal/routes"

	"github.com/gofiber/fiber/v3"
	"github.com/joho/godotenv"
)


func main(){

	if err:=godotenv.Load();err!=nil{
		log.Println(".env file not found")
	}

	cfg:=config.Load()

	app:=fiber.New(fiber.Config{
		ErrorHandler: middleware.ErrorHandler,
	})

	// ping route (for api testing)
	app.Get("/ping",func(c fiber.Ctx)error{
		return c.Status(200).JSON(fiber.Map{
			"success":true,
			"message":"pong",
		})
	})

	routes.Setup(app)


	port:=":"+cfg.PORT
	log.Fatal(app.Listen(port))
}
