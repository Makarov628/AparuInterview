using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Aparu.Infrastructure.Interfaces;
using Dapper;
using Dapper.Contrib.Extensions;
using Aparu.Entities;

namespace Aparu.UseCases.Autos.Queries.GetAutoById
{
    public class GetAutoByIdQueryHandler : IRequestHandler<GetAutoByIdQuery, Auto>
    {
        private readonly IDatabaseConnection _connection;
        public GetAutoByIdQueryHandler(IDatabaseConnection connection)
        {
            _connection = connection;
        }

        public async Task<Auto> Handle(GetAutoByIdQuery request, CancellationToken cancellationToken)
        {
            using (var conn = _connection.GetConnection())
            {
                var sql = "SELECT driver.*, auto.* FROM \"Autos\" as auto LEFT JOIN \"Drivers\" as driver on auto.\"Id\" = driver.\"AutoId\" WHERE auto.\"Id\" = @Id";
                
                var result = await conn.QueryAsync<Auto, Driver, Auto>(sql, (auto, driver) => {
                    auto.Drivers.Append(driver);
                    return auto;
                }, splitOn: "AutoId", param: new { request.Id } );

                return result.AsList().FirstOrDefault();
            }
        }
    }
}