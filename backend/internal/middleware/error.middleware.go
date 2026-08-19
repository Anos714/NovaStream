package middleware

import (
	"errors"
	"log"

	"github.com/gofiber/fiber/v3"
)


func ErrorHandler(c fiber.Ctx,err error)error{
	status:=fiber.StatusInternalServerError
	message:="Internal Server Error"


	if fiberErr,ok:= errors.AsType[*fiber.Error](err); ok {
		status=fiberErr.Code
		message=fiberErr.Message
	}

	log.Println("Error: ",err)

	return c.Status(status).JSON(fiber.Map{
		"success":false,
		"error":fiber.Map{
			"message":message,
			"status":status,
		},
	})
}
