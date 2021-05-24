using System;
using System.Threading;
using System.Threading.Tasks;
using Aparu.UseCases.Drivers.Dtos;
using MediatR;
using Dapper;
using Aparu.Infrastructure.Interfaces;

namespace Aparu.UseCases.Drivers.Commands.CreateDriver
{
    public class CreateDriverCommandHandler : IRequestHandler<CreateDriverCommand, int>
    {
        private readonly IDatabaseConnection _connection;
        public CreateDriverCommandHandler(IDatabaseConnection connection)
        {
            _connection = connection;
        }

        public async Task<int> Handle(CreateDriverCommand request, CancellationToken cancellationToken)
        {
            using (var conn = _connection.GetConnection())
            {
                return await conn.ExecuteAsync("INSERT INTO \"Drivers\" (\"Name\", \"AutoId\") VALUES (@Name, @AutoId)", request.Dto);
            }
         }
    }
}