package converter

import (
	"fmt"

	"github.com/h2non/bimg"
)



func Convert(data []byte, to string) ([]byte, error) {
	image := bimg.NewImage(data)

	switch to {
	case "jpeg", "jpg":
		return image.Process(bimg.Options{Type: bimg.JPEG})
	case "png":
		return image.Process(bimg.Options{Type: bimg.PNG})
	case "webp":
		return image.Process(bimg.Options{Type: bimg.WEBP})
	case "avif":
		return image.Process(bimg.Options{Type: bimg.AVIF})
	case "svg":
		return image.Process(bimg.Options{Type: bimg.SVG})
	default:
		return nil,fmt.Errorf("unsupported output format: %s",to)
	}

}
