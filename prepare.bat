cd Asp.Core
dotnet restore
cd ..

cd Asp.Xpo
dotnet restore
cd ..

cd Asp.Mvc
dotnet restore
npm install
webpack --config webpack.config.vendor.js