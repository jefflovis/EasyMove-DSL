python.pythonGenerator.forBlock['importar_conex_o'] = function(block, generator) {
  // TODO: Assemble python into code variable.
  var code = '...\n';
  return code;
};

python.pythonGenerator.forBlock['movimentos'] = function(block, generator) {
  var statements_movimento_robo = generator.statementToCode(block, 'movimento_robo');
  // TODO: Assemble python into code variable.
  var code = '...\n';
  return code;
};

python.pythonGenerator.forBlock['mover_atualizado'] = function(block, generator) {
  var number_x = block.getFieldValue('x');
  var number_y = block.getFieldValue('y');
  var angle_name = block.getFieldValue('NAME');
  // TODO: Assemble python into code variable.
  var code = '...\n';
  return code;
};

python.pythonGenerator.forBlock['rotas'] = function(block, generator) {
  var text_name = block.getFieldValue('NAME');
  var statements_rota = generator.statementToCode(block, 'rota');
  // TODO: Assemble python into code variable.
  var code = '...\n';
  return code;
};