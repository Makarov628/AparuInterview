using System.Linq;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Aparu.Infrastructure.Interfaces;
using MediatR;
using Dapper;
using Aparu.Entities;

namespace Aparu.UseCases.Autos.Queries.GetAutoListWithDrivers
{
    public class GetAutoListWithDriversQueryHandler : IRequestHandler<GetAutoListWithDriversQuery, List<Entities.Auto>>
    {
        private readonly IDatabaseConnection _connection;
        public GetAutoListWithDriversQueryHandler(IDatabaseConnection connection)
        {
            _connection = connection;
        }

        public async Task<List<Auto>> Handle(GetAutoListWithDriversQuery request, CancellationToken cancellationToken)
        {
            using (var conn = _connection.GetConnection())
            {
                var sql = "SELECT auto.*, driver.* FROM \"Autos\" as auto LEFT JOIN \"Drivers\" as driver on auto.\"Id\" = driver.\"AutoId\"";

                var result = await conn.QueryAsync<Auto, Driver, Auto>(sql, (auto, driver) =>
                {
                    if (driver != null) 
                        auto.Drivers.Add(driver);
                    return auto;
                });

                return result.GroupBy(a => a.Id).Select(a =>
                {
                    var auto = a.FirstOrDefault();
                    auto.Drivers = a.Where(a => a.Drivers.Any(d => d != null)).Select(a => a.Drivers.SingleOrDefault()).ToList();
                    return auto;
                }).ToList();
            }
        }
    }
}