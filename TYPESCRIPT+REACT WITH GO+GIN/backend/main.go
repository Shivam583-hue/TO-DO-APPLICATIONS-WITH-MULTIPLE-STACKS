package main

import (
	"github.com/Shivam583-hue/TO-DO-APPLICATIONS-WITH-MULTIPLE-STACKS/TYPESCRIPT+REACT+WITH+GO+GIN/backend/database"
	"github.com/Shivam583-hue/TO-DO-APPLICATIONS-WITH-MULTIPLE-STACKS/TYPESCRIPT+REACT+WITH+GO+GIN/backend/models"
	"github.com/Shivam583-hue/TO-DO-APPLICATIONS-WITH-MULTIPLE-STACKS/TYPESCRIPT+REACT+WITH+GO+GIN/backend/router"
)

func main() {
	database.ConnectDB()
	database.DB.AutoMigrate(&models.Todo{})
	r := router.SetupRouter()
	r.Run(":8080")
}
