package config

import "os"


type Config struct{
	PORT string
	MaxUploadSize string
}

func Load()Config{
	return Config{
		PORT: getEnv("PORT","3000"),
		MaxUploadSize: getEnv("MAX_UPLOAD_SIZE","10485760"),
	}
}

func getEnv(key string, fallback string)string{
	value:=os.Getenv(key)

	if value==""{
		return fallback
	}

	return value
}
