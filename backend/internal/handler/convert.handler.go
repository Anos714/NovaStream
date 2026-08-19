package handler

import (
	"nova-stream/internal/service"

	"github.com/gofiber/fiber/v3"
)


var supportedFormats = map[string]bool{
	"jpeg": true,
	"jpg":  true,
	"png":  true,
	"webp": true,
	"avif": true,
	"svg":  true,
}

func ConvertImage(c fiber.Ctx)error{

	from:=c.Params("from")
	to:=c.Params("to")

	if !supportedFormats[from] {
		return fiber.NewError(fiber.StatusBadRequest, "unsupported source format")
	}

	if !supportedFormats[to] {
		return fiber.NewError(fiber.StatusBadRequest, "unsupported target format")
	}

	if from == to {
		return fiber.NewError(fiber.StatusBadRequest, "source and target format cannot be same")
	}

	file,err:=c.FormFile("image")
	if err!=nil {
		return fiber.NewError(fiber.StatusBadRequest,"image is required")
	}

		output,err:=service.ConvertImage(file, from, to)
		if err != nil {
			return fiber.NewError(fiber.StatusInternalServerError, err.Error())
		}

		c.Set("Content-Type", "image/"+to)
		c.Set("Content-Disposition", `attachment; filename=converted.`+to+`"`,)
		return c.Send(output)
	}
