# Pulso Mecánico - Node.js + Azure App Service

Versión lista para desplegar en Azure App Service usando Node.js y Express.

## 🚀 Instalación local
```bash
npm install
npm start
```
Abrir: http://localhost:8080

## ☁️ Despliegue en Azure App Service
```bash
az login
az group create --name RG-PulsoMecanico --location eastus
az appservice plan create --name PlanPulsoMecanico --resource-group RG-PulsoMecanico --sku B1 --is-linux
az webapp create --resource-group RG-PulsoMecanico --plan PlanPulsoMecanico --name pulsomecanicoapp --runtime "NODE|18-lts"
az webapp deployment source config-local-git --name pulsomecanicoapp --resource-group RG-PulsoMecanico
git remote add azure <URL>
git push azure main
```

Tu sitio quedará en: https://pulsomecanicoapp.azurewebsites.net
