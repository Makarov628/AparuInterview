using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Aparu.Infrastructure.Interfaces;
using Dapper;
using Dapper.Contrib.Extensions;
using Aparu.Entities;

namespace Aparu.UseCases.Drivers.Queries.GetDriverById
{
    public class GetDriverByIdQueryHandler : IRequestHandler<GetDriverByIdQuery, Driver>
    {
        private readonly IDatabaseConnection _connection;
        public GetDriverByIdQueryHandler(IDatabaseConnection connection)
        {
            _connection = connection;
        }

        public async Task<Driver> Handle(GetDriverByIdQuery request, CancellationToken cancellationToken)
        {
            using (var conn = _connection.GetConnection())
            {
                var sql = "SELECT driver.*, auto.* FROM \"Drivers\" as driver LEFT JOIN \"Autos\" as auto on auto.\"Id\" = driver.\"AutoId\" WHERE driver.\"Id\" = @Id";
                
                var result = await conn.QueryAsync<Driver, Auto, Driver>(sql, (driver, auto) => {
                    driver.Auto = driver.AutoId != null ? auto : null;
                    return driver;
                }, splitOn: "Id", param: new { request.Id } );

                return result.AsList().FirstOrDefault();
            }
        }
    }
}