package config

import (
	"log"
	"os"
	"strconv"
)


type Config struct{
	PORT string
	MaxUploadSize int
	FrontendURL string
}

func Load()Config{
	maxUploadSize,err := strconv.Atoi(getEnv("MAX_UPLOAD_SIZE","10485760"))
	if err != nil {
		log.Fatal("error parsing MAX_UPLOAD_SIZE:", err)
	}


	return Config{
		PORT: getEnv("PORT","3000"),
		MaxUploadSize: maxUploadSize,
		FrontendURL: getEnv("FRONTEND_URL","http://localhost:5173"),
	}
}

func getEnv(key string, fallback string)string{
	value:=os.Getenv(key)
	if value==""{
		return fallback
	}

	return value
}
