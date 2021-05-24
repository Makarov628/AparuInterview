using System;
using System.Threading;
using System.Threading.Tasks;
using Aparu.Infrastructure.Interfaces;
using Aparu.UseCases.Drivers.Dtos;
using MediatR;
using Dapper;

namespace Aparu.UseCases.Drivers.Commands.UpdateDriver
{
    public class UpdateDriverCommandHandler : IRequestHandler<UpdateDriverCommand>
    {
        private readonly IDatabaseConnection _connection;
        public UpdateDriverCommandHandler(IDatabaseConnection connection)
        {
            _connection = connection;
        }
        public async Task<Unit> Handle(UpdateDriverCommand request, CancellationToken cancellationToken)
        {
            using (var conn = _connection.GetConnection())
            {
                await conn.ExecuteAsync("UPDATE \"Drivers\" SET \"Name\" = @Name, \"AutoId\"= @AutoId WHERE \"Id\" = @Id", new { Id = request.Id, request.Dto.Name, request.Dto.AutoId });
                return Unit.Value;
            }
        }
    }
}