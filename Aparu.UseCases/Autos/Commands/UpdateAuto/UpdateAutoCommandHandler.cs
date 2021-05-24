using System;
using System.Threading;
using System.Threading.Tasks;
using Aparu.Infrastructure.Interfaces;
using Aparu.UseCases.Autos.Dtos;
using MediatR;
using Dapper;

namespace Aparu.UseCases.Autos.Commands.UpdateAuto
{
    public class UpdateAutoCommandHandler : IRequestHandler<UpdateAutoCommand>
    {
        private readonly IDatabaseConnection _connection;
        public UpdateAutoCommandHandler(IDatabaseConnection connection)
        {
            _connection = connection;
        }
        public async Task<Unit> Handle(UpdateAutoCommand request, CancellationToken cancellationToken)
        {
            using (var conn = _connection.GetConnection())
            {
                await conn.ExecuteAsync("UPDATE \"Autos\" SET \"Brand\" = @Brand, \"Model\"= @Model WHERE \"Id\" = @Id", new { Id = request.Id, request.Dto.Brand, request.Dto.Model });
                return Unit.Value;
            }
        }
    }
}