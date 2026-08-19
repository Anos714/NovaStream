package service

import (
	"fmt"
	"io"
	"mime/multipart"
	"nova-stream/internal/converter"
)


func ConvertImage(file *multipart.FileHeader, from, to string)([]byte,error) {

	// open file
	input, err := file.Open()
	if err != nil {
		return nil, fmt.Errorf("failed to open file: %w", err)
	}
	defer input.Close()


	// read file bytes data
	data, err := io.ReadAll(input)
	if err != nil {
		return nil, fmt.Errorf("failed to read file: %w", err)
	}

	// convert image
	output, err := converter.Convert(data, to)
	if err != nil {
		return nil, fmt.Errorf("failed to convert image: %w", err)
	}
	return output, nil
}
