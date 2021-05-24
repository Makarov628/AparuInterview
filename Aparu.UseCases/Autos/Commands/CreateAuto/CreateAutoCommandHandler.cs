using System;
using System.Threading;
using System.Threading.Tasks;
using Aparu.UseCases.Autos.Dtos;
using MediatR;
using Dapper;
using Aparu.Infrastructure.Interfaces;

namespace Aparu.UseCases.Autos.Commands.CreateAuto
{
    public class CreateAutoCommandHandler : IRequestHandler<CreateAutoCommand, int>
    {
        private readonly IDatabaseConnection _connection;
        public CreateAutoCommandHandler(IDatabaseConnection connection)
        {
            _connection = connection;
        }

        public async Task<int> Handle(CreateAutoCommand request, CancellationToken cancellationToken)
        {
            using (var conn = _connection.GetConnection())
            {
                return await conn.ExecuteAsync("INSERT INTO \"Autos\" (\"Brand\", \"Model\") VALUES (@Brand, @Model)", request.Dto);
            }
         }
    }
}