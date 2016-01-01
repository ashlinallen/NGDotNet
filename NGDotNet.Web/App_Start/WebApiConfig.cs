using System.Web.Http;

[assembly: WebActivatorEx.PreApplicationStartMethod(
    typeof(NGDotNet.Web.WebApiConfig), "Register")]

namespace NGDotNet.Web
{
    public static class WebApiConfig
    {
        public static void Register()
        {
            HttpConfiguration config = GlobalConfiguration.Configuration;

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Formatters.Remove(config.Formatters.XmlFormatter);
        }
    }
}