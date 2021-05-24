using System;
using Aparu.UseCases.Drivers.Dtos;
using Aparu.Entities;

using MediatR;
using System.Collections.Generic;

namespace Aparu.UseCases.Drivers.Queries.GetDriverListWithAuto
{
    public class GetDriverListWithAutoQuery: IRequest<List<Entities.Driver>>
    {
    }
}