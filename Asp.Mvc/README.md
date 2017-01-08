# 前言
* 模板采用 Microsoft aspnetcore-spa
  * `npm install -g yo generator-aspnetcore-spa`
  * `yo aspnetcore-spa`
* [GitHub](https://github.com/aspnet/JavaScriptServices)
* [模板帮助文档](http://blog.stevensanderson.com/2016/05/02/angular2-react-knockout-apps-on-aspnet-core/)

# 准备
`dotnet restore`

`npm install`

`webpack --config webpack.config.vendor.js`

解压Asp.Mvc/wwwroot/arcgis_js_api.rar到Asp.Mvc/wwwroot下


# 调试
`set ASPNETCORE_ENVIRONMENT=Development`

`dotnet run`


# 运行
`dotnet run`


# 发布
`set ASPNETCORE_ENVIRONMENT=Production`

`webpack --config webpack.config.vendor.js --env.prod`

`webpack --env.prod`