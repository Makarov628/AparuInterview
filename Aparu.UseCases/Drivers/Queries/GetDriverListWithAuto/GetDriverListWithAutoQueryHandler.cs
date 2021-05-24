using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Aparu.Infrastructure.Interfaces;
using MediatR;
using Dapper;
using Aparu.Entities;

namespace Aparu.UseCases.Drivers.Queries.GetDriverListWithAuto
{
    public class GetDriverListWithAutoQueryHandler : IRequestHandler<GetDriverListWithAutoQuery, List<Driver>>
    {
        private readonly IDatabaseConnection _connection;
        public GetDriverListWithAutoQueryHandler(IDatabaseConnection connection)
        {
            _connection = connection;
        }
        
        public async Task<List<Driver>> Handle(GetDriverListWithAutoQuery request, CancellationToken cancellationToken)
        {
            using (var conn = _connection.GetConnection())
            {
                var sql = "SELECT driver.*, auto.* FROM \"Drivers\" as driver LEFT JOIN \"Autos\" as auto on auto.\"Id\" = driver.\"AutoId\"";
                
                var result = await conn.QueryAsync<Driver, Auto, Driver>(sql, (driver, auto) => {
                    driver.Auto = driver.AutoId != null ? auto : null;
                    return driver;
                }, splitOn: "Id");

                return result.AsList();
            }
        }
    }
}