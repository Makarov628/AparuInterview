using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Aparu.Infrastructure.Interfaces;
using MediatR;
using Dapper;
using Aparu.Entities;

namespace Aparu.UseCases.Drivers.Queries.GetDriverList
{
    public class GetDriverListQueryHandler : IRequestHandler<GetDriverListQuery, List<Entities.Driver>>
    {
        private readonly IDatabaseConnection _connection;
        public GetDriverListQueryHandler(IDatabaseConnection connection)
        {
            _connection = connection;
        }

        public async Task<List<Driver>> Handle(GetDriverListQuery request, CancellationToken cancellationToken)
        {
            using (var conn = _connection.GetConnection())
            {
                var sql = "SELECT driver.* FROM \"Drivers\" as driver ";
                
                var result = await conn.QueryAsync<Driver>(sql);

                return result.AsList();
            }
        }
    }
}