#!/bin/bash

echo "🚀 Iniciando servidores..."

# Función para limpiar procesos al salir
cleanup() {
    echo "🛑 Deteniendo servidores..."
    pkill -f "node server.js"
    pkill -f "python3 -m http.server"
    exit 0
}

# Capturar Ctrl+C para limpiar procesos
trap cleanup SIGINT

# Iniciar backend
echo "📡 Iniciando backend en puerto 3000..."
cd backend
node server.js &
BACKEND_PID=$!
cd ..

# Esperar un momento para que el backend se inicie
sleep 3

# Verificar que el backend esté funcionando
if curl -s http://localhost:3000/api/prices > /dev/null; then
    echo "✅ Backend iniciado correctamente"
else
    echo "❌ Error al iniciar el backend"
    cleanup
fi

# Iniciar frontend
echo "🌐 Iniciando frontend en puerto 8080..."
cd Frontend/public
python3 -m http.server 8080 &
FRONTEND_PID=$!
cd ../..

# Esperar un momento para que el frontend se inicie
sleep 2

# Verificar que el frontend esté funcionando
if curl -s http://localhost:8080 > /dev/null; then
    echo "✅ Frontend iniciado correctamente"
else
    echo "❌ Error al iniciar el frontend"
    cleanup
fi

echo ""
echo "🎉 ¡Servidores iniciados exitosamente!"
echo ""
echo "📊 Backend API: http://localhost:3000/api/prices"
echo "🌐 Frontend: http://localhost:8080"
echo "🧪 Test de comunicación: http://localhost:8080/test-communication.html"
echo ""
echo "Presiona Ctrl+C para detener los servidores"

# Mantener el script ejecutándose
wait