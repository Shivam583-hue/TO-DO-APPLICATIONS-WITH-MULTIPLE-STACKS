package router

import (
	"github.com/Shivam583-hue/TO-DO-APPLICATIONS-WITH-MULTIPLE-STACKS/TYPESCRIPT+REACT+WITH+GO+GIN/backend/handlers"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	r.GET("/todos", handlers.GetTodos)
	r.POST("/todos", handlers.CreateTodo)
	r.PUT("/todos/:id", handlers.UpdateTodo)
	r.DELETE("/todos/:id", handlers.DeleteTodo)

	return r
}
