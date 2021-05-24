using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Aparu.Infrastructure.Interfaces;
using MediatR;
using Dapper;
using Aparu.Entities;

namespace Aparu.UseCases.Autos.Queries.GetAutoList
{
    public class GetAutoListQueryHandler : IRequestHandler<GetAutoListQuery, List<Auto>>
    {
        private readonly IDatabaseConnection _connection;
        public GetAutoListQueryHandler(IDatabaseConnection connection)
        {
            _connection = connection;
        }

        public async Task<List<Auto>> Handle(GetAutoListQuery request, CancellationToken cancellationToken)
        {
            using (var conn = _connection.GetConnection())
            {
                var sql = "SELECT auto.* FROM \"Autos\" as auto";
                
                var result = await conn.QueryAsync<Auto>(sql);

                return result.AsList();
            }
        }
    }
}