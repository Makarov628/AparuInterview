using System;
using System.Threading;
using System.Threading.Tasks;
using Aparu.Infrastructure.Interfaces;
using Aparu.UseCases.Autos.Dtos;
using MediatR;
using Dapper;

namespace Aparu.UseCases.Autos.Commands.DeleteAuto
{
    public class DeleteAutoCommandHandler : IRequestHandler<DeleteAutoCommand>
    {
        private readonly IDatabaseConnection _connection;
        public DeleteAutoCommandHandler(IDatabaseConnection connection)
        {
            _connection = connection;
        }
        public async Task<Unit> Handle(DeleteAutoCommand request, CancellationToken cancellationToken)
        {
            using (var conn = _connection.GetConnection())
            {
                await conn.ExecuteAsync("DELETE FROM \"Autos\" WHERE \"Id\" = @Id", new { request.Id });
                return Unit.Value;
            }
        }
    }
}