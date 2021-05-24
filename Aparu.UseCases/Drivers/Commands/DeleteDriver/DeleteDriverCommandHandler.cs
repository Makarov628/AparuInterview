using System;
using System.Threading;
using System.Threading.Tasks;
using Aparu.Infrastructure.Interfaces;
using Aparu.UseCases.Drivers.Dtos;
using MediatR;
using Dapper;

namespace Aparu.UseCases.Drivers.Commands.DeleteDriver
{
    public class DeleteDriverCommandHandler : IRequestHandler<DeleteDriverCommand>
    {
        private readonly IDatabaseConnection _connection;
        public DeleteDriverCommandHandler(IDatabaseConnection connection)
        {
            _connection = connection;
        }
        public async Task<Unit> Handle(DeleteDriverCommand request, CancellationToken cancellationToken)
        {
            using (var conn = _connection.GetConnection())
            {
                await conn.ExecuteAsync("DELETE FROM \"Drivers\" WHERE \"Id\" = @Id", new { request.Id });
                return Unit.Value;
            }
        }
    }
}